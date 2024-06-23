export default function NotificationCard({ message }: { message: string }) {
    return (
        <div className="rounded-2xl bg-white text-black h-10 p-2 font-bold text-center content-center w-72 mt-1 ml-20">
            <p>{message}</p>
        </div>
    )
}