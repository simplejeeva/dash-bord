import "./App.css";
import LineStyleSharpIcon from "@mui/icons-material/LineStyleSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import BuildSharpIcon from "@mui/icons-material/BuildSharp";
import FileOpenSharpIcon from "@mui/icons-material/FileOpenSharp";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import TableRowsSharpIcon from "@mui/icons-material/TableRowsSharp";
export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartittle">Dashbord</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem active">
              <LineStyleSharpIcon className="sidebaricon" />
              Home
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartittle">INTERFACE</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem ">
              <SettingsSharpIcon className="sidebaricon" />
              components
            </li>
            <li className="sidebarlistitem ">
              <BuildSharpIcon className="sidebaricon" />
              Utlilities
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartittle">ADDONS</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem ">
              <FileOpenSharpIcon className="sidebaricon" />
              Pages
            </li>
            <li className="sidebarlistitem ">
              <ShowChartSharpIcon className="sidebaricon" />
              Charts
            </li>
            <li className="sidebarlistitem ">
              <TableRowsSharpIcon className="sidebaricon" />
              Table
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
