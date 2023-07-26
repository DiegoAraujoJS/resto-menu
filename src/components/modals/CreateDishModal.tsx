import { PropsWithChildren } from "react";

export default function CreateDishModal(props: {showModal: boolean, setShowModal: (showModal: boolean) => void}) {
    const InputSection = (props: PropsWithChildren<{className?: string}>) => <div className={`border border-black border-solid h-60 p-4 ${props.className ?? ""}`}>{props.children}</div>
    if (!props.showModal) return null;
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-auto my-6 mx-auto max-w-5xl"
            >
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*body*/}
                    <div className="p-6">
                        <div className="grid grid-cols-2 grid-rows-2">
                            <InputSection>
                                <div className="border border-solid border-blue-800 pt-[35%] h-0 w-1/2"></div>
                            </InputSection>
                            <InputSection>
                                <div className="grid grid-cols-3 grid-rows-1 w-full border border-solid border-cyan-900">
                                    <span className="">Título</span>
                                    <input type="text" className="border border-solid border-grey800 w-full col-start-2 col-end-4" />
                                </div>
                            </InputSection>
                            <InputSection className="flex items-end">
                                <div>
                                    <div>Agregar categoría</div>
                                    <div>Agregar Ingredientes</div>
                                    <div>Agregar tags</div>
                                </div>
                            </InputSection>
                        </div>
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
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
