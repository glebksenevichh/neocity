const content = {
    interests_table: `
<div style="display: flex; width: 100%;">
                        <!-- games column -->
                        <div class="column-container">
                            <div class="column-header">games</div>
                            <div class="column-scroll">
                                <div class="column-item">cs2</div>
                                <div class="column-item">dark souls games (all of them)</div>
                                <div class="column-item">despelote</div>
                                <div class="column-item">furi</div>
                                <div class="column-item">heroes of might and magic 3</div>
                                <div class="column-item">disco elysium</div>
                                <div class="column-item">nier automata & replicant</div>
                                <div class="column-item">babbdi</div>
                                <div class="column-item">echo point nova</div>
                                <div class="column-item">monster hunter world/rise/wilds</div>
                                <div class="column-item">inscryption</div>
                                <div class="column-item">god of war (the new ones)</div>
                                <div class="column-item">neighbours from hell</div>
                                <div class="column-item">mirror's edge</div>
                                <div class="column-item">battlefield bad_company_2/1/5</div>
                                <div class="column-item">deadlock</div>
                                <div class="column-item">sludge life 1 & 2</div>
                                <div class="column-item">sunset overdrive</div>
                                <div class="column-item">etc. etc.</div>
                            </div>
                        </div>
                        
                        <!-- music column -->
                        <div class="column-container">
                            <div class="column-header">music</div>
                            <div class="column-scroll">
                                <div class="column-item">topsters: <a href="./images/topsters/2022_topster.png" target="_blank">2022</a>, <a href="./images/topsters/early_2025_topster.png" target="_blank">april 2025</a>, <a href="./images/topsters/late_2025_topster.png" target="_blank">november 2025</a>, <a href="./images/topsters/march 2026.png" target="_blank">march 2026</a></div>
                                <div class="column-item">the mars volta</div>
                                <div class="column-item">mgmt</div>
                                <div class="column-item">состояние птиц </div>
                                <div class="column-item">психея (psychea)</div>
                                <div class="column-item">maruja</div>
                                <div class="column-item">blood brothers</div>
                                <div class="column-item">fall of troy</div>
                                <div class="column-item">hail the sun</div>
                                <div class="column-item">streetlight manifesto</div>
                                <div class="column-item">psychedelic porn crumpets</div>
                                <div class="column-item">system of a down</div>
                                <div class="column-item">glassjaw</div>
                                <div class="column-item">црвених цветова</div>
                                <div class="column-item">источник</div>
                                <div class="column-item">secret band</div>
                                <div class="column-item">ultra deluxe</div>
                                <div class="column-item">thursday</div>
                                <div class="column-item">hey ily</div>
                                <div class="column-item">emma harner</div>
                                <div class="column-item">nick drake</div>
                                <div class="column-item">#####</div>
                                <div class="column-item">bassvictim</div>
                                <div class="column-item">hayworth</div>
                                <div class="column-item">hopesfall</div>
                                <div class="column-item">poison the well</div>
                                <div class="column-item">шумные и угрожающие выходки</div>
                                <div class="column-item">these arms are snakes</div>
                                <div class="column-item">dis[like]</div>
                                <div class="column-item">оля и монстр</div>
                                <div class="column-item">the jonbenet</div>
                                <div class="column-item">the early november</div>
                                <div class="column-item">etc. etc.</div>
                            </div>
                        </div>
                    </div>
    `,
    images: `            <ul id="img_carousel">
                <li data-accName="img_1" class="text">
                    <img src="./images/gallery/image_1.jpg">
                </li>
                <li data-accName="img_2" class="text">
                    <img src="./images/gallery/image_2.jpg">
                </li>

            </ul>`
};

function toggle_section(elem, targetId)
{
    const arrows = elem.querySelectorAll('.arrow');
    const open = arrows[0].textContent === ':>';

    arrows[0].textContent = open ? ':V' : ':>';
    arrows[1].textContent = open ? 'V:' : '<:';

    const target = document.getElementById(targetId);

    if (open)
        target.innerHTML = content[targetId];
    else
        target.innerHTML = "";
}