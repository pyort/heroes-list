import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router'

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class HeroesList extends React.Component {
    constructor(props) {
        super(props);

        this.styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 500,
                height: 500,
                overflowY: 'auto',
                marginBottom: 24,
            },
        };

        this.tilesData = [
            {
                img: 'images/grid-list/00-52-29-429_640.jpg',
                title: 'Breakfast',
                author: 'jill111',
            },
            {
                img: 'images/grid-list/burger-827309_640.jpg',
                title: 'Tasty burger',
                author: 'pashminu',
            },
            {
                img: 'images/grid-list/camera-813814_640.jpg',
                title: 'Camera',
                author: 'Danson67',
            },
            {
                img: 'images/grid-list/morning-819362_640.jpg',
                title: 'Morning',
                author: 'fancycrave1',
            },
            {
                img: 'images/grid-list/hats-829509_640.jpg',
                title: 'Hats',
                author: 'Hans',
            },
            {
                img: 'images/grid-list/honey-823614_640.jpg',
                title: 'Honey',
                author: 'fancycravel',
            },
            {
                img: 'images/grid-list/vegetables-790022_640.jpg',
                title: 'Vegetables',
                author: 'jill111',
            },
            {
                img: 'images/grid-list/water-plant-821293_640.jpg',
                title: 'Water plant',
                author: 'BkrmadtyaKarki',
            },
        ];
    }

    render() {
        return (
            <div style={this.styles.root}>
                <GridList cellHeight={200} style={this.styles.gridList}>

                    <Subheader>December</Subheader>
                    {this.tilesData.map((tile) => (
                        <Link to={`/hero/${tile.title}`}>
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                subtitle={<span>by <b>{tile.author}</b></span>}
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            >
                                <img src={tile.img}/>
                            </GridTile>
                        </Link>
                    ))}
                </GridList>
            </div>
        );
    }
}

export default HeroesList;
