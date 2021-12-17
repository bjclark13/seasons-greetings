import Level from './Level';
import './Tree.css';

function Tree() {
    return (
        <div className="tree">
            <Level level={1} />
            <Level level={2} />
            <Level level={3} />

            <div className='stump'></div>
        </div>
    )
}

export default Tree;