import { ElevenLabsClient } from 'elevenlabs';

const client = new ElevenLabsClient({ apiKey: 'sk_1c1d203e5dbbf7dc01aa3c5beb13c0b0a4b6a8755e48c82a' });

export const createVoice = async (name, files, removeBackgroundNoise, description, labels) => {
  try {
    const response = await client.voices.create({
      name,
      files,
      removeBackgroundNoise,
      description,
      labels,
    });
    return response;
  } catch (error) {
    console.error('Error creating voice:', error);
    throw error;
  }
};

export const fetchVoices = async () => {
  try {
    const voices = await client.voices.getAll();
    return voices;
  } catch (error) {
    console.error('Error fetching voices:', error);
    throw error;
  }
};