import styles from '../styles/members.module.css';

export default function MemberSchool({name, fullName, representative, members}) {
    return (<div className={`${styles.block} ${styles.blockBlue}`}>
        <div><u>{name}</u></div>
        <ul className='unstyled'>
            {members.map(member=>(
                <li>{member.name}</li>
            ))}
        </ul>
    </div>);
}
