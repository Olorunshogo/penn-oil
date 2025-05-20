
// Investors Overview
export const adjustedEarnings = ref<string>('3.8');
export const shareholdersDistributions = ref<string>('6.9');
export const cashFlow = ref<string>('7.6');
export const oilEquivalent = ref<string>('3,553');
export const returnOnCapital = ref<string>('8.3');
export const netDebt = ref<string>('3.8');


// Investors Corporate Governance
export const roleOfBoard = ref<boolean>(false);
export const boardSuccession = ref<boolean>(false);
export const directorOfIndependence = ref<boolean>(false);
export const boardSize = ref<boolean>(false);
export const termsOfOffice = ref<boolean>(false);

export const electionOfDirectors = ref<boolean>(false);
export const otherBoardMemberships = ref<boolean>(false);
export const directorRetirementPolicy = ref<boolean>(false);
export const numberOfBoardCommittees = ref<boolean>(false);
export const boardLeadership = ref<boolean>(false);

export const executiveSessions = ref<boolean>(false);
export const businessConduct = ref<boolean>(false);
export const confidentiality = ref<boolean>(false);
export const successionPlanning = ref<boolean>(false);
export const boardCompensation = ref<boolean>(false);

export const boardAccess = ref<boolean>(false);
export const directorOrientation = ref<boolean>(false);
export const evaluationBoard = ref<boolean>(false);
export const ceoPerformance = ref<boolean>(false);
export const directorStock = ref<boolean>(false);

export const accessToOutside = ref<boolean>(false);
export const boardAgenda = ref<boolean>(false);
export const strategicPlanning = ref<boolean>(false);
export const policyOnStockholders = ref<boolean>(false);
export const confidentialStockholder = ref<boolean>(false);

export const communicationWithBoard = ref<boolean>(false);
export const reportingConcerns = ref<boolean>(false);
export const policyOnStockholdersRights= ref<boolean>(false);
export const periodicReview = ref<boolean>(false);


export function toggleRoleOfBoard() {
    roleOfBoard.value = !roleOfBoard.value;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;
    
    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleBoardSuccession() {
    roleOfBoard.value = false;
    boardSuccession.value = !boardSuccession.value;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;
    
    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;
    
    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleDirectorOfIndependence() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = !directorOfIndependence.value;
    boardSize.value = false;
    termsOfOffice.value = false;
    
    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;
    
    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleBoardSize() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = !boardSize.value;
    termsOfOffice.value = false;
    
    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;
    
    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleTermsOfOffice() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = !termsOfOffice.value;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}

export function toggleElectionOfDirectors() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = !electionOfDirectors.value;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleOtherBoardMemberships() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = !otherBoardMemberships.value;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleDirectorRetirementPolicy() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = !directorRetirementPolicy.value;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleNumberOfBoardCommittees() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = !numberOfBoardCommittees.value;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleBoardLeadership() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = !boardLeadership.value;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}

export function toggleExecutiveSessions() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = !executiveSessions.value;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleBusinessConduct() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = !businessConduct.value;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleConfidentiality() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = !confidentiality.value;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleSuccessionPlanning() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = !successionPlanning.value;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleBoardCompensation() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = !boardCompensation.value;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}

export function toggleBoardAccess() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = !boardAccess.value;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleDirectorOrientation() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = !directorOrientation.value;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleEvaluationBoard() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = !evaluationBoard.value;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleCEOPerformance() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = !ceoPerformance.value;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleDirectorStock() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = !directorStock.value;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}

export function toggleAccessToOutside() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = !accessToOutside.value;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleBoardAgenda() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = !boardAgenda.value;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleStrategicPlanning() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = !strategicPlanning.value;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function togglePolicyOnStockholders() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = !policyOnStockholders.value;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleConfidentialStockholder() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = !confidentialStockholder.value;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}

export function toggleCommunicationWithBoard() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = !communicationWithBoard.value;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function toggleReportingConcerns() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = !reportingConcerns.value;
    policyOnStockholdersRights.value = false;
    periodicReview.value = false;
}
export function togglePolicyOnStockholdersRights() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = !policyOnStockholdersRights.value
    periodicReview.value = false;
}
export function togglePeriodicReview() {
    roleOfBoard.value = false;
    boardSuccession.value = false;
    directorOfIndependence.value = false;
    boardSize.value = false;
    termsOfOffice.value = false;

    electionOfDirectors.value = false;
    otherBoardMemberships.value = false;
    directorRetirementPolicy.value = false;
    numberOfBoardCommittees.value = false;
    boardLeadership.value = false;

    executiveSessions.value = false;
    businessConduct.value = false;
    confidentiality.value = false;
    successionPlanning.value = false;
    boardCompensation.value = false;

    boardAccess.value = false;
    directorOrientation.value = false;
    evaluationBoard.value = false;
    ceoPerformance.value = false;
    directorStock.value = false;

    accessToOutside.value = false;
    boardAgenda.value = false;
    strategicPlanning.value = false;
    policyOnStockholders.value = false;
    confidentialStockholder.value = false;

    communicationWithBoard.value = false;
    reportingConcerns.value = false;
    policyOnStockholdersRights.value = false;
    periodicReview.value = !periodicReview.value;
}


// Investor ESG
export const esgBusinessConduct = ref<boolean>(false)
export function toggleEsgBusinessConduct() {
    esgBusinessConduct.value = !esgBusinessConduct.value;
}
