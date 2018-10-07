import React from 'react';
import buffer from 'buffer';
import backend from '../../backends/Orbit'

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  uploadImage(photo) {
    const reader = new FileReader();
    const be  = backend()
    reader.onloadend = () => {
      const buff = buffer.Buffer(reader.result);
      be.uploadImage(buff).then((hash)=>{
        console.log('upload succcesded')
        const ipfsURL  = `https://ipfs.io/ipfs/${hash}`
        this.setState({
          file: ipfsURL
        })
      this.props.onChange(ipfsURL)
      }).catch((e)=>{
        console.log('e', e)
      })

    };
    reader.readAsArrayBuffer(photo);
  }

  handleChange(event) {
    this.uploadImage(event.target.files[0]);
  }

  render() {
    return (
      <div>
        <input accept="image/*" type="file" onChange={this.handleChange} />
        <img style={{width: '100%'}} src={this.state.file} />
      </div>
    );
  }
}

export default ImageUploader;
