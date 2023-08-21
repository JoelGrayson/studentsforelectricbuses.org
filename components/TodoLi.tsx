export default function TodoLi({ children, done }: { children: React.ReactNode; done?: boolean }) {
    // return <li className={done ? styles.done : styles.incomplete}>{children}</li>;
    return <li className={`!list-none ml-[-1.3rem] ${done ? 'line-through' : ''}`}>
        {done ? '☑' : '☐'}&nbsp;&nbsp;{children}
    </li>;
}
