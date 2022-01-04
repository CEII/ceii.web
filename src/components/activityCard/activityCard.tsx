const ActivityCard = () => {

    return (
        <div className="border-2  h-auto m-4 rounded-lg  md:w-7/12 lg:w-4/12">
            <div className="m-5 text-secondary">
                <div className="w-60 mb-2 ">
                    <h2 className="text-blue-500 font-bold" >Conceptos básicos de programación </h2>
                </div>

                <div className="divide-y-2">

                    <div className="flex flex-row mb-4">
                        <div className="">
                            <img alt="perfil" src="https://www.lucushost.com/blog/wp-content/uploads/2020/01/que-es-un-bot.png" className="rounded-full w-12 h-12 object-cover"></img>
                        </div>
                        <h4 className="mt-3 ml-2 font-semibold">Walter Morales</h4>
                    </div>

                    <div className="mt-2">
                        <h3 className="font-semibold">Horarios</h3>
                        <p>Lunes, Miércoles y Viernes, de 8:00 a.m.</p>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a eros nec augue blandit accumsan id in leo. Cras ornare, purus sit amet imperdiet tristique, dui enim hendrerit nunc, a interdum metus mauris nec ligula. Duis quis eros mi.
                    </p>
                </div>

                <div className="flex flex-row place-content-between mt-3 font-bold">
                    <h3>1/20</h3>
                    <button className="bg-slate-400 font-semibold bg-accent text-white rounded-full w-32 h-7 border-none">Inscribirme</button>
                </div>

            </div>
        </div>
    )
}

export default ActivityCard;