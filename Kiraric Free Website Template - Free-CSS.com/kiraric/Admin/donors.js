function viewDownloadInfo(id, firstName, lastName, job) {
    if (job === 'Doctor' || job === 'Teacher') {
        alert(`View/Download Info for Donor:\nID: ${id}\nName: ${firstName} ${lastName}\nJob: ${job}`);
     } else {
        alert(`This donor's information is not available for viewing/download.`);
    }
}
