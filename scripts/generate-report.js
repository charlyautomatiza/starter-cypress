const { merge } = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');
const fs = require('fs');
const path = require('path');

const reportDir = path.join(__dirname, '../cypress/reports/mochawesome');
const outputDir = path.join(__dirname, '../mochawesome-report');

async function generateReport() {
  try {
    console.log('Merging mochawesome JSON reports...');
    
    // Check if report directory exists
    if (!fs.existsSync(reportDir)) {
      console.error('Report directory does not exist:', reportDir);
      process.exit(1);
    }

    // Merge JSON reports
    const jsonReport = await merge({
      files: [`${reportDir}/*.json`],
    });

    console.log('Generating HTML report...');

    // Generate HTML report
    await generator.create(jsonReport, {
      reportDir: outputDir,
      reportFilename: 'index.html',
      reportTitle: 'Cypress Test Report',
      reportPageTitle: 'Cypress Test Results',
      inline: true,
      charts: true,
      embeddedScreenshots: true,
      code: true,
    });

    console.log('Report generated successfully!');
    console.log(`View the report at: ${path.join(outputDir, 'index.html')}`);
  } catch (error) {
    console.error('Error generating report:', error);
    process.exit(1);
  }
}

generateReport();
