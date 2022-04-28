import worldIcon from "../images/world.png"
export default function Header() {
    return (
        <header className="header">
        <img src={worldIcon} alt="world" />
        <p>My travel journal.</p>
        </header>
    )
}