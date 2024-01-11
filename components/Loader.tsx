import Image from 'next/image';

export default function Loader({ width=30 }: { width?: any }) {
    return <Image width={width} height={width} alt='Loading' src='/images/loading.gif' />;
}
