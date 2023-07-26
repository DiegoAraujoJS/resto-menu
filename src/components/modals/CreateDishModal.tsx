export default function CreateDishModal(props: {showModal: boolean, setShowModal: (showModal: boolean) => void}) {
    if (!props.showModal) return null;
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-5xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*body*/}
                        <div className="p-6">
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                I always felt like I could do anything. That’s the main
                                thing people are controlled by! Thoughts- their perception
                                of themselves! They're slowed down by their perception of
                                themselves. If you're taught you can’t do anything, you
                                won’t do anything. I was taught I could do everything.
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="mr-4 bg-blue-500 rounded text-lg p-2 text-white"
                                type="button"
                                onClick={() => props.setShowModal(false)}
                            >
                                Cerrar
                            </button>
                            <button
                                className="mr-4 bg-blue-500 rounded text-lg p-2 text-white"
                                type="button"
                                onClick={() => props.setShowModal(false)}
                            >
                                Guardar cambios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
