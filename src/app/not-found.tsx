import Image from "next/image";

export default function Custom404() {
    return (
        <div className={'flex content-center flex-col'}>
            <p className={'font-extrabold text-9xl'}>404</p>
            <p>Ooops. Page not Found :/</p>
            <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href={'/'}
            >
                <Image
                    className="dark:invert"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                />
                Deploy now
            </a>
        </div>
    )
}