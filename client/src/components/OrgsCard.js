import React from 'react';
import {Card} from 'react-bootstrap'

const OrgsCard = () => {
    return (
        <Card className='mx-lg-3 my-3 p-2 col-sm-10 col-lg-5 d-inline-block' style ={{height: '35rem'}}>
            <Card.Body>
                <Card.Title><h1>Your Organizations</h1></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">View Top down info on a target...</Card.Subtitle>
                <Card.Text style={{height:'25rem', overflow:'scroll'}}>
                        <div>Eiusmod et culpa culpa nulla et eiusmod ex ex. Tempor excepteur eiusmod duis magna cillum magna labore sit ut ea quis ut magna. Non ullamco officia anim dolor excepteur minim ad adipisicing consequat. Veniam fugiat fugiat exercitation labore. Id officia tempor magna laborum pariatur non officia officia. Sint adipisicing culpa commodo culpa.

Est cupidatat labore sit labore aliquip Lorem elit. Commodo consequat nisi eu labore amet sint excepteur labore laboris sunt. Et mollit reprehenderit enim id nisi. Officia qui aliquip pariatur ea excepteur consequat nulla do proident. Sunt reprehenderit fugiat laboris esse pariatur sint proident dolor commodo. Et velit ex excepteur enim irure elit quis pariatur sunt cillum consequat esse ex.

Magna ut ut veniam laboris labore aliquip laborum reprehenderit anim ut veniam proident magna. Reprehenderit irure anim enim aliquip eu ullamco eiusmod. Nostrud aute veniam sunt tempor do do ad tempor magna. Nisi ut ex sunt elit exercitation culpa non est eiusmod sint commodo. Proident cupidatat ex consequat labore quis cupidatat nostrud nulla ipsum excepteur. Occaecat do velit veniam occaecat irure ut culpa eu sunt.

Deserunt voluptate aliquip cupidatat minim mollit tempor aliquip consequat. Sunt voluptate eiusmod exercitation aliqua eiusmod commodo quis eu voluptate. Do elit do nisi non laborum enim minim nostrud tempor non nostrud cillum qui ex. Sit elit velit velit nisi duis sint esse tempor in labore ea velit ex aute.

Consectetur dolore et dolore dolore deserunt adipisicing consequat. Tempor aute laboris fugiat in Lorem eiusmod sunt. Tempor aliqua elit officia laborum consectetur. Aute non proident duis nulla eu magna. Et ea ex mollit irure anim enim proident irure. Ipsum aliquip ad in sunt enim labore occaecat aliqua tempor. Duis eiusmod qui ipsum velit qui ipsum veniam.

Id eu est proident elit pariatur eiusmod eu aliqua proident consectetur duis. Labore laboris Lorem ea esse do excepteur aliqua pariatur. Non in non eiusmod ex magna dolor dolore do qui veniam voluptate. Do esse nisi cillum ullamco quis incididunt nulla sint quis labore labore eu.</div>
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default OrgsCard;