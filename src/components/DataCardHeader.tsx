import Button from "@mui/material/Button";
const DataCardHeader = () => {
  return (
    <div className="flex flex-row w-[1075px] h-[36px] justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Data Card</h1>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0F6CBD",
          color: "#F8F8F8",
          textTransform: "none",
          width: "104px",
          height: "36px",
          fontSize: "14px",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#459AFF",
          },
        }}
      >
        Edit
      </Button>
    </div>
  );
};

export default DataCardHeader;
