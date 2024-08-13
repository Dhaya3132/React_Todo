const Notification = () => {
    return (
        <div className="flex justify-center">
            <div className="fixed top-10 p-6 bg-white rounded-t-2xl border-solid border-b-4 border-green-500 shadow-2xl">
                <h1 className="font-Sora font-semibold text-xl">Hooray!!</h1>
                <p className="font-Sora font-light text-md">You have completed a task, Keep going</p>
            </div>
        </div>

    )
}

export default Notification;

//Delete Notification when the task has complete it will pop up the notification