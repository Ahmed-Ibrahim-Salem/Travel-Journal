import worldIcon from "../images/world.png"
export default function Header() {
    return (
        <header className="header">
        <img src={worldIcon} alt="world" />
        <h4>My travel journal.</h4>
        </header>
    )
}