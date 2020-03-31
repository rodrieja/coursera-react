import React from 'react'
import { CardImg, Card, CardBody, CardTitle, CardText } from 'reactstrap';

function DishDetail({ dish }) {
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={dish} />
                <RenderComments dish={dish} />
            </div>
        </div>
    )
}

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    else
        return (
            <div></div>
        );
}

function RenderComments({ dish }) {
    if (dish != null) {
        const comments = dish.comments.map((comment) => {
            return (
                <ul class="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1 offset-md-5">
                <h4>Comments</h4>
                {comments}
            </div>
        )
    }
    else
        return (
            <div></div>
        );
}

export default DishDetail;