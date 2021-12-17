import './Level.css';

function Level({ level }: { level: number }) {
    let top;
    if (level === 1) {
        top = 75;
    } else if (level === 2) {
        top = 50;
    } else {
        top = 0;
    }

    return (
        <div className="level" style={{
            borderLeft: `${level * 50}px solid transparent`,
            borderRight: `${level * 50}px solid transparent`,
            borderBottom: `${level * 50}px solid green`,
            top
        }}>
        </div>
    )
}

export default Level;