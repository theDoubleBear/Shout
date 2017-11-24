export const GET_FULLNAME = 'GET_FULLNAME'
export const RECORDING_STATUS = 'RECORDING_STATUS'

export function getFullName(fullName){
    return { type: GET_FULLNAME, fullName};
}

export function getRecordingStatus(status){
    return { type: RECORDING_STATUS, status};
}