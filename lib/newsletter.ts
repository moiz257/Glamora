export const subscribeToNewsletter = async (email: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  console.log('Subscribed email:', email);
};