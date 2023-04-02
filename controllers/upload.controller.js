const excelJs = require('exceljs');
const fs = require('fs');
const path = require('path');

const upload = async (req, res) => {
  try {
    const workbook = new excelJs.Workbook();
    await workbook.xlsx.readFile(req.file?.path);
    const sheet = workbook.getWorksheet(1);

    const newWb = new excelJs.Workbook();
    const newSheet = newWb.addWorksheet(sheet.name);
    // newSheet.model = sheet.model;

    sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      var targetRow = newSheet.getRow(rowNumber);
      row.eachCell({ includeEmpty: false }, (cell, cellNumber) => {
          targetRow.getCell(cellNumber).value = cell.value;
      });
      row.commit();
    });

    newSheet.getCell(2,2).fill = {
      type: 'pattern',
      pattern:'solid',
      fgColor:{ argb:'eaed9d' }
    };
    // newWb.xlsx.writeFile('result.xlsx');

    const fileName = `${req.file.name}_${Date.now()}.xlsx`;

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

    await newWb.xlsx.write(res).then(() => res.end());

    fs.unlinkSync(req.file.path);
    return res.send({ result: 'ok' });
  } catch (e) {
    return res.status(400).send({ error : e.message });
  }
}

module.exports = { upload };