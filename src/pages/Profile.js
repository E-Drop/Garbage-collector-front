import React, {Component} from 'react';
import { withAuth } from '../components/AuthProvider';
import firebase, { auth } from 'firebase';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class Profile extends Component {

    state = {
        username: this.props.user.username,
        avatar: '',
        location: this.props.user.location,
        isUploading: false,
        progress: 0,
        avatarURL: this.props.user.imageURL,
    };
    handleClick = (event) => {
        event.preventDefault()
        const { username, location, avatarURL } = this.state;
        const { _id } = this.props.user;
        const user = {
            id: _id,
            username,
            location,
            imageURL: avatarURL,
        }
        this.props.update(user);
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
      }

    handleUploadStart = () => this.setState({
        isUploading: true,
        progress: 0
    });

    handleProgress = (progress) => this.setState({
        progress
    });

    handleUploadError = (error) => {
        this.setState({
            isUploading: false
        });
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
        this.setState({
            avatar: filename,
            progress: 100,
            isUploading: false
        });
        firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({
            avatarURL: url
        }));
    };

    render() {
        
        const { avatarURL, username, location, progress, isUploading } = this.state;
        return (
            <div>
                <form onSubmit={this.handleClick} >
                    <div className="image-container" style={{color: 'red' ,backgroundImage:`url(${avatarURL})`}}>
                    </div>
                    <CustomUploadButton
                        accept="image/*"
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress} style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4}}
                    >
                        Select your awesome avatar
                    </CustomUploadButton>
                    {isUploading && <p> Progress: {progress} </p>}
                    <label> Username: </label>
                    <input type="text" value={username} name="username" onChange={this.handleChange}/>
                    <label> location: </label>
                    <input type="text" value={location} name="location" onChange={this.handleChange}/>
                    
                    <button onClick={this.handleClick}>Save changes</button>
                </form>
            </div>
        );
    }
}

export default withAuth(Profile);