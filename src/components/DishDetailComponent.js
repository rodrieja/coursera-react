import React, { component } from 'react'
import { Component } from 'react';
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';


class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author} , {comment.date}</li>
                    </ul>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            )
        }
        else
            return (
                <div></div >
            );
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1 offset-md-5">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;