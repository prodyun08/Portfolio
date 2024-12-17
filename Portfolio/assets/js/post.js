const html = `<h1 class="title">Reinforcement Mastery: The Concrete Supervisor’s Blueprint for Steelwork Excellence</h1><br>
            <h3 class="subtitle"><u>Introduction</u></h3>
            <p class="description" id="des"><span class="ltspace">In</span> any reinforced concrete structure, the proper handling and placement of steel reinforcement is critical to ensure the structural integrity, strength, and safety of the building. This guide is aimed at concrete supervisors to help them master the essentials of reinforcement work, from planning to execution.
            </p>
            <br>
            <h3 class="subtitle"><u>Chapter 1: Understanding Reinforcement Basics</u></h3>
            <ul class="conlist">
                <li><b>What is Reinforcement? </b>Steel bars, known as rebar, are embedded in concrete to take care of tensile stresses in structural elements.</li>
            </ul>
            <ul class="conlist">
                <li><b>Types of Steel Used in Reinforcement</b></li>
                <ul class="conlist-sub">
                    <li>Mild Steel (MS)</li>
                    <li>Thermo-Mechanically Treated (TMT) bars</li>
                    <li>High-Strength Deformed (HSD) bars</li>
                </ul>
            </ul>
            <ul class="conlist">
                <li><b>Why is Reinforcement Important? </b>Concrete alone can withstand compressive forces but is weak in tension. Reinforcement absorbs tensile forces, ensuring the structure’s overall stability.</li>
            </ul>
            <h3 class="subtitle"><u>Chapter 2: Reading and Interpreting Reinforcement Drawings</u></h3>
            <ul class="conlist">
                <li><b>Structural Drawings </b>How to understand rebar placement in columns, beams, slabs, and footings.</li>
                <li><b>Standard Notations </b>Learn the typical symbols used in reinforcement detailing.</li>
                <li><b>Bar Bending Schedule (BBS) </b>Mastering BBS will help you organize reinforcement cuts and bends according to site needs.</li>
            </ul>
            <h3 class="subtitle"><u>Chapter 3: Planning for Steelwork</u></h3>
            <ul class="conlist">
                <li><b>Calculating Steel Quantities </b>Estimation of the required reinforcement using standard codes like IS 456 (for Indian projects).</li>
                <li><b>Preparing a Steel Layout </b>How to correctly set up reinforcement on-site, based on approved drawings.</li>
                <li><b>Coordination with Fabricators </b>Ensuring accuracy in cutting, bending, and placing steel according to specifications.</li>
            </ul>
            <h3 class="subtitle"><u>Chapter 4: Best Practices for Steel Placement</u></h3>
            <ul class="conlist">
                <li><b>General Guidelines</b></li>
                <ul class="conlist-sub">
                    <li>Ensure proper concrete cover for corrosion protection.</li>
                    <li>Avoid cutting or bending on site without approval.
                    </li>
                </ul>
                <li><b>Spacing and Alignment </b>Correct spacing between bars ensures structural efficiency and reduces material wastage.</li>
                <li><b>Use of Spacers and Chairs </b>These maintain proper cover and ensure the steel stays in position during concrete pouring.</li>
            </ul>
            <h3 class="subtitle"><u>Chapter 5: Common Challenges and Solutions</u></h3>
            <ul class="conlist">
                <li><b>Overlapping Bars </b>Managing overlaps (lap length) in longer spans.</li>
                <li><b>Fixing Loose Reinforcement </b>Proper tying techniques using binding wire to ensure bars don’t shift during concreting.</li>
                <li><b>Avoiding Corrosion </b>Coating, protecting, and storing steel to avoid corrosion before placement.</li>
            </ul>
            <h3 class="subtitle"><u>Chapter 6: Site Supervision for Steelwork</u></h3>
            <ul class="conlist">
                <li><b>Inspections Before Concrete Pour </b>Verifying the number, size, spacing, and layout of reinforcement as per drawings.</li>
                <li><b>Quality Control Checklists </b>Ensure every stage of steel placement is verified for compliance with engineering standards.</li>
                <li><b>Coordination with Other Trades </b>Coordination with electrical, plumbing, and formwork teams to avoid clashes.</li>
            </ul>
            <h3 class="subtitle"><u>Chapter 7: Safety Protocols</u></h3>
            <ul class="conlist">
                <li><b>Handling Reinforcement Safely</b></li>
                <ul class="conlist-sub">
                    <li>Personal protective equipment (PPE) like gloves and safety boots.
                    </li>
                    <li>Proper storage of steel bars to avoid accidents on site.
                    </li>
                </ul>
                <li><b>Lifting and Moving Steel </b>Guidelines for safe manual and mechanical handling of steel.
                </li>
            </ul>
            <h3 class="subtitle"><u>Chapter 8: Documentation and Reporting</u></h3>
            <ul class="conlist">
                <li><b>Keeping Records </b>How to maintain detailed records of steel used and work completed.
                </li>
                <li><b>Daily Site Reports </b>Submitting progress reports for reinforcement work to ensure accountability.
                </li>
            </ul>`;
const urll = new URL(window.location.href);
const id = urll.searchParams.get('id') || 1;
const post = document.querySelector('#post');

(async () => {
    try {
        const link = `https://proxy.techzbots1.workers.dev/?u=https://api.prodyun.me/id/${id}`;
        const link4 = await axios.get(link);
        const link6 = link4.data;
        console.log(link6);
        document.title = link6.name;

        post.innerHTML = link6.content;
    } catch (error) {
        console.log('errro');
    }
})();



