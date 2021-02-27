import React from 'react'
import '../style.css';

function Tabledata(){

    return (
        <div>
            <body>
                <div>
                    <h3>Dishes I Want To Make</h3>

                    <table id="tentry">
                        <tr>
                            <th>Dish</th>
                            <th>Description</th>
                            <th>Cook Time</th>
                        </tr>

                        <tr>
                            <td><a href="https://www.justonecookbook.com/omurice-japanese-omelette-rice/">Omurice</a></td>
                            <td>A Western-infuelced style of Japanese Cuisine. It consists of thin fried rice envoleped by an omellete and usually topped with ketchup.</td>
                            <td>25 min</td>
                        </tr>

                        <tr>
                            <td><a href="https://www.simplyrecipes.com/recipes/posole_rojo/">Pozole</a></td>
                            <td>One of my favorite dishes. This is a traditional Mexican soup/stew that is made with typically with pork (but can be prepared with chicken), hominy, and red chiles. The dish is often topped with shredded cabbage, radishes, chopped onions, oregano, avacado, and lime if desired.</td>
                            <td> 3 hrs 10 min</td>
                        </tr>

                        <tr>
                            <td><a href="https://www.gordonramsay.com/gr/recipes/beef-wellington/">Beef Wellington</a></td>
                            <td>This dish is essentially a pie and is of English origin. It is one of Gordon Ramsay's most famous dishes. The dish is made out of a fillet steak coated with a pâté and duxelles, and is then wrapped in puff pastry and baked.</td>
                            <td>3 hrs</td>
                        </tr>
                    </table>
                </div>
            </body>
        </div>
    )
}

export default Tabledata;