import Image from 'next/image';
import ButtonComponent from './button';

export default function Contact() {
    console.log("Hey is this in client or server?");
    return (
        <div className="flex items-center justify-center">
            <Image
                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/11203/283fb478-5554-44aa-b37f-7917a90f38d7.jpg"
                alt="Contact Image"
                width={400}
                height={400}
            />
            <ButtonComponent />
        </div>


    )
}