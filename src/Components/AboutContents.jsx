import Link from 'next/link';

const AboutContents = () => {
    return (
        <div>
            this is abot section
            <li><Link href={`/about/history`}>History</Link></li>
            <li><Link href={`/about/mission`}>Mission</Link></li>
        </div>
    );
};

export default AboutContents;