import './Badge.css'
const types = ['medium', 'high', 'low']

function Badge({type=types[0], disable }) {
    return ( 
        <div className={`badge ${[type]} ${disable?"disable":""}`}>{[type]}</div>
     );
}

export default Badge;