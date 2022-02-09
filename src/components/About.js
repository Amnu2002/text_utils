import React from 'react'

export default function About() {
    
    const handleonclickabt1=()=>{

        let a = document.getElementById("cntn1-light");
        if(a.style.display==="block")
            a.style.display="none";
        else
            a.style.display="block"
    };
    const handleonclickabt2=()=>{

        let a = document.getElementById("cntn2-light");
        if(a.style.display==="block")
            a.style.display="none";
        else
            a.style.display="block"
    };
    const handleonclickabt3=()=>{

        let a = document.getElementById("cntn3-light");
        if(a.style.display==="block")
            a.style.display="none";
        else
            a.style.display="block"
    };
    return (
        <>
            <div className="abtmain">
            <div className="abt1-light">
                <h2> btn1</h2>
                <button className="abtbtn1-light" onClick={handleonclickabt1}>more</button>
            </div>
            <div className="cntn1-light" id="cntn1-light">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore quibusdam rem ipsum minus iure temporibus amet provident adipisci maxime, unde omnis deserunt, dolor veniam, nam sapiente tempore voluptas eaque.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi dolorum voluptatibus, nobisfacilis doloribus quisquam animi numquam quibusdam labore veritatis incidunt! Nihil earum itaque minus excepturitempora obcaecati ab id pariatur deleniti quas, quidem recusandae facilis ipsa sapiente sequi assumendaasperiores! Temporibus eos numquam quasi perspiciatis atque necessitatibus, ratione repellat laborum rerum.
                </p>
            </div>
            <div className="abt2-light">
                <h2> btn2</h2>
                <button className="abtbtn2-light" onClick={handleonclickabt2}>more</button>
            </div>
            <div className="cntn2-light" id="cntn2-light">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore quibusdam rem ipsum minus iure temporibus amet provident adipisci maxime, unde omnis deserunt, dolor veniam, nam sapiente tempore voluptas eaque.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi dolorum voluptatibus, nobisfacilis doloribus quisquam animi numquam quibusdam labore veritatis incidunt! Nihil earum itaque minus excepturitempora obcaecati ab id pariatur deleniti quas, quidem recusandae facilis ipsa sapiente sequi assumendaasperiores! Temporibus eos numquam quasi perspiciatis atque necessitatibus, ratione repellat laborum rerum.
                </p>
            </div>
            <div className="abt3-light">
                <h2> btn3</h2>
                <button className="abtbtn3-light" onClick={handleonclickabt3}>more</button>
            </div>
            <div className="cntn3-light" id="cntn3-light">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore quibusdam rem ipsum minus iure temporibus amet provident adipisci maxime, unde omnis deserunt, dolor veniam, nam sapiente tempore voluptas eaque.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi dolorum voluptatibus, nobisfacilis doloribus quisquam animi numquam quibusdam labore veritatis incidunt! Nihil earum itaque minus excepturitempora obcaecati ab id pariatur deleniti quas, quidem recusandae facilis ipsa sapiente sequi assumendaasperiores! Temporibus eos numquam quasi perspiciatis atque necessitatibus, ratione repellat laborum rerum.
                </p>
            </div>
            </div>
        </>
    )
}
