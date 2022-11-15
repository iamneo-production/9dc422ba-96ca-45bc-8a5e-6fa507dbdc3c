module.exports = async function (summary) {
    var pdfBody = [];
    pdfBody.push([
        { text: 'Date', style: 'tableHeader' },
        { text: 'Transaction Details', style: 'tableHeader' },
        { text: 'Amount', style: 'tableHeader' }
    ]);
    summary.forEach(smmry => {
        pdfBody.push([
            { text: `${new Date(smmry.transferedOn).toDateString()}`, style: 'textStyle' },
            { text: `From ${'XXXXXXXX' + new String(smmry.from).substr(8)} to ${'XXXXXXXX' + new String(smmry.to).substr(8)}; Remark: ${smmry.remark}`, style: 'textStyle' },
            { text: smmry.amount, style: 'textStyle' }
        ]);
    });

    const docDefinition = {
        pageSize: 'A4',
        content: [
            { text: `${new Date().toDateString()}`, style: 'date' },
            { text: 'Statement', style: 'header' },
            {
                style: 'table',
                table: {
                    body: pdfBody
                }
            },
        ],

    }
    return docDefinition;
}