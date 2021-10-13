import "./styles.css"
import {useEffect, useState} from "react";
import Messages from "../../../components/specific/Messages";
import {data as db} from "../../../database";

const MesgAccess = () => {
    const [cantMsg, setCantMsg] = useState(0)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        const getData = async () => {
            await db.collection("messages").get()
                .then((messages) => {
                    setData(messages.docs)
                    setCantMsg(messages.size)
                    setLoading(false)
            }).catch((e) => console.log("Error", e))
        }

        getData().then()
    }, [])

    return(
        <div className="admin-container">
            <div className="admin-section">
                <h1>Administrador de página</h1>
                <div className="taskbar">
                    <div className="taskbar-options">
                        <h3>Mensajes ({cantMsg})</h3>
                        <h3>Mensajes ({cantMsg})</h3>
                        <h3>Mensajes ({cantMsg})</h3>
                    </div>
                    <div className="taskbar-line"/>
                </div>
                <div className="messages">
                    {loading ? <h1>Cargando...</h1>
                        : data.map((message, index) => {
                            return <Messages
                                key={index}
                                clientName={message.get("name") + " " + message.get("lastName")}
                                clientMsg={message.get("message")}
                                iconSelected={message.get("contactWay")}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MesgAccess
