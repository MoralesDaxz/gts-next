const sendMsg = () => {
    const numberPhone = "34628038334";
    const message =
        "¡Hola! Me gustaría conocer y obtener más información acerca de los servicios que presta GTServicios.";
    const urlWSP = `https://wa.me/${numberPhone}?text=${encodeURIComponent(
        message
    )}`;
    window.open(urlWSP, "_blank");
};
const callUs = () => {
    window.location.href = "tel:+34910117148";
};
const writeUs = () => {
    window.location.href =
        "mailto:informacion@gtservicios.es?subject=Tengo%20una%20consulta%20";
};
const location = () => {
    window.location.href = "https://maps.app.goo.gl/qyf6gkW7sENvdu9w5";
};
const tokenSubmit = "9082d01547371417ba67e65fc192568b"
export { sendMsg, callUs, writeUs, location, tokenSubmit }