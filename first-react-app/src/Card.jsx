import diamond1 from "./assets/pexels-the-glorious-studio-10475791.jpg"
export default function Card(){
    return(
        <div className="card">
            <img src={diamond1} alt="" width="100"/>
            <h2>Ice Lake</h2>
            <p>$899</p>
        </div>
    )
}