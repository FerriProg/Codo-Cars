fetch(
  'https://api.mercedes-benz.com/configurator/v2/markets/es_AR/models/2383611_AR1/configurations/AJ-053_AU-851_GC-421_LE-L_LU-040_MJ-803_PC-23P-30P-431-P17-P21-P29-P31-P47-P49-P54-PBP-PWS_SA-14U-16U-17U-20B-233-235-242-249-266-270-275-287-309-355-365-399-401-413-446-463-475-489-500-501-51U-549-551-581-608-632-668-670-682-70B-732-772-810-827-868-871-876-881-882-889-891-897-913-916-919-927-986-989-B01-B51-B59-H41-L6J-R01-RZS-U09-U10-U19-U22-U25-U26-U47-U60-U82-U88-Y05_SC-3U8-502-52V-7B5-82P-8U6-99B-AA6-K16-K27-SAK/images/vehicle?perspectives=EXT030%252CINT1&roofOpen=false&night=true&background=true',
  {
    method: 'GET',
    headers: {
      //   Authorization: 'Bearer 07029682-c76b-4d5d-9f65-348cd20aa5a8',
      'x-api-key': '07029682-c76b-4d5d-9f65-348cd20aa5a8',
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': 'http://localhost:5500',
    },
  }
)
  .then((response) => {
    console.log(response.json());
  })
  .catch((error) => console.error(error));
