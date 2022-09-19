import styles from '../styles/members.module.css';
import Tooltip from '@mui/material/Tooltip'

export default function MemberSchool({name, fullName, representative, members}) {
    return (<div className={`${styles.block} ${styles.blockBlue}`}>
        <Tooltip title={fullName} placement="top" arrow>
            <div><u>{name}</u></div>
        </Tooltip>  
        <ul className='unstyled'>
            {members.map(member=>(
                <li key={member.name}>{member.name}</li>
            ))}
        </ul>
    </div>);
}
