import React from 'react';
import '../style.css';

function Textdata(){

    return (
        <div>
            <body>
                <br></br>
                <form>
                    <label for="fname">First Name:</label><br></br>
                    <input type="text" id="fname" name="fname"></input><br></br>
                    <label for="lname">Last Name:</label><br></br>
                    <input type="text" id="lname" name="lname"></input><br></br>

                    <h4>Favorite Pass Time </h4>

                    <div class="rad-choices">

                        <input type="radio" id="r1" name="choices" value="sleeping"></input>
                        <label for="r1">Sleeping</label> <br></br>

                        <input type="radio" id="r2" name="choices" value="rec-activities"></input>
                        <label for="r2">Recreational Activities</label><br></br>

                        <input type="radio" id="r3" name="choices" value="gaming"></input>
                        <label for="r3">Gaming</label><br></br>

                        <input type="radio" id="r4" name="choices" value="arts"></input>
                        <label for="r4">Creative Arts</label><br></br>

                        <input type="radio" id="r0" name="choices" value="oc"></input>
                        <label for="r0">Other:</label><input type="text" id="oc" name="r0"></input><br></br><br></br>

                    </div>
                    <input type="submit" id ="sub" name="s" value="Done"></input>
                </form>
            </body>
        </div>
    )
}

export default Textdata;
