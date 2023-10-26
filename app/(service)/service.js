const baseUrl = "https://technical-task-api.icapgroupgmbh.com/api";

const login = async (requestData) => {
  try {
    const response = await fetch(`${baseUrl}/login/`, {
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

const getData = async (url) => {
  try {
    const response = await fetch(`${url ? url : baseUrl + "/table/"}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

const updateData = async (id, requestData) => {
  try {
    const response = await fetch(`${baseUrl}/table/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default { login, getData, updateData };
