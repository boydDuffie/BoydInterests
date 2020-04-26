import React from 'react';
import './Album.css';

//need to get a list of album names
//implement a means of cycling through the pictures when image is clicked on 

const albumcovers = ['10,000Days', 'AllOutLife', 'AWizardToldMe', 'Baraka', 'CryLittleSister', 'Detox', 'ESCAPE', 'EVERYDAY', 'Fable', 'FinallyDead', 'FRIDAY', 'GlissRiffer', 'GTG', 'HamSandwich', 'HardStuck', 'HeavenUpsideDown', 'hell', 'Holiday', 'IGOR', 'ILoveYou,Goodnight.', 'IntoTheTrees', 'iridescence', 'Jellyfish'];


class Picture extends React.Component {
    render() {
        let i=Math.floor(Math.random()*(albumcovers.length-1))
        //placeholder image file
        return(
            <div className="Album">
                <div className="image-container">
                    <a href="index.html">
                        <img src={process.env.PUBLIC_URL + '/albumcovers/' + albumcovers[i] + '.png'} alt={albumcovers[i]} />
                    </a>
                </div>
                <h2>{albumcovers[i]}</h2>
            </div>
        );
    }
}

export default Picture;