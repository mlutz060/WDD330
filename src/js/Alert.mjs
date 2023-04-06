function alertTemplate(alert) {
    return `<p class="alert-message" style="background-color: ${alert.background}; color: ${alert.color};">${alert.message}</p>`;
}

export default class Alert {
    constructor(alertList) {
        this.alerts = alertList;
    }

    async init() {

        this.renderAlertList("main");
    }

    renderAlertList(selector) {
        const element = document.querySelector(selector);
        let html = "<section class='alert-list'>";
        this.alerts.forEach(alert => {
            html += alertTemplate(alert);
        });
        html += "</section>"
        element.insertAdjacentHTML(
            "beforeBegin",
            html
        );
    }
}