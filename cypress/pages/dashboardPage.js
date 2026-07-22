class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",

        }

        return selectors
    }
    checkDashboardPage() {
        cy.location('pathname').should('include', 'dashboard')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }


}
export default DashboardPage