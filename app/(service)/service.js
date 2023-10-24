const url = "https://technical-task-api.icapgroupgmbh.com/api";

const login = async (requestData) => {
  try {
    const response = await fetch(`${url}/login/`, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default { login };
