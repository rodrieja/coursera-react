import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);

        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <>
                <Button outline color="secondary"
                    onClick={() => this.toggleModal()}>
                    <i className="fa fa-pencil" aria-hidden="true"></i> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Label htmlFor=".rating">Rating</Label>
                            <Row className="form-group">
                                <Col>
                                    <Control.select model=".rating" id=".rating" name=".rating" className="custom-select"
                                        validators={{
                                            required: required,
                                        }}>
                                        <option value="" selected="selected" hidden="hidden">Rate it!</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Label htmlFor=".author">Author</Label>
                            <Row className="form-group">
                                <Col>
                                    <Control.text model=".author" id=".author" name=".author" placeholder="Author Name" className="form-control"
                                        validators={{
                                            required: required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Should at least be three characters long.',
                                            maxLength: 'Should be less than or equal to 15 characters.'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Label htmlFor=".comment">Comment</Label>
                            <Row className="form-group">
                                <Col>
                                    <Control.textarea model=".comment" id=".comment" name=".comment" className="form-control" rows="6" validators={{ required }} />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default CommentForm;