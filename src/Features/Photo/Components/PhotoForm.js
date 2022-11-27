import ReactSelect from "react-select";
// import {react} from 'react';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "../../../Constants/global";
import Images from "../../../Constants/image";
import './style.scss'

PhotoForm.defautlProps = {
    onsubmit: null,
};

function PhotoForm() {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId" className="title-photo" style={{marginBottom: '10px'}}>Title</Label>
                <Input name="tite" className="titleId" placeholder="Title" />
            </FormGroup>

            <FormGroup style={{marginTop: '10px'}}>
                <Label for="categoryId" >CateGory</Label>
                <ReactSelect 
                    className="categoryId"
                    name="categoryId"
                    placeholder="What's your photos"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup style={{marginTop: '10px'}}>
                <Label for="categoryId" >Photo</Label>
                <div><Button type="button" outline color="primary" style={{marginBottom: '15px', height: '30px', cursor: 'pointer'}}>Random a photo</Button></div>
                <div>
                    <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful" />
                </div>
            </FormGroup>

            <FormGroup >
                <Button color="primary" style={{ height: '30px', cursor: 'pointer'}}>Add to album</Button>
            </FormGroup>
        </Form>
    )
}

export default PhotoForm;