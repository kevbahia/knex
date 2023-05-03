import db from '../database/index.js';

const getSamples = async () => {
    let result;

    result = await db('dbo.Sample')
        .select('SampleName', 'SampleId')
        .orderBy('SampleOrder')

    return result;
}

const sampleService = {
    getSamples
}

export default sampleService;