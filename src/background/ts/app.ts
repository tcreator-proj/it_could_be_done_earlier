browser.runtime.onConnect.addListener(async port => {
    if(port.name === "Netology_template_kepper") {
        port.onMessage.addListener( async (msg: any) => {
            const res = await fetch("http://localhost:3000/api/expert/" + msg.email);
            port.postMessage(await res.json())
        })
    }
})