import React from "react";
import "../styles/overview.css";
import Cards from "../components/Cards/Cards";
import Graph from "../components/Graph/Graph";

import { PlusIcon } from "@heroicons/react/24/solid";

const Overview = () => {
  const checkboxInputs = document.querySelectorAll(".checkbox-input");

  checkboxInputs.forEach((checkboxInput) => {
    checkboxInput.addEventListener("click", () => {
      checkboxInput.checked = !checkboxInput.checked;
    });
  });

  return (
    <>
      <Cards />
      <Graph />

      <div className="tickets_task">
        <div className="unresolvedTickets">
          <div className="ticketsHeader">
            <div className="unsupported">
              <h3>Unresolved</h3>
              <p>
                <span>Group: </span>Support
              </p>
            </div>
            <p>View Details</p>
          </div>
          <div className="ticketsBody">
            <div className="tickets">
              <h4>Waiting on Feature Request</h4>
              <p>4238</p>
            </div>

            <div className="tickets">
              <h4>Awaiting Customer Response</h4>
              <p>1008</p>
            </div>

            <div className="tickets">
              <h4>Awaiting Developer Fix</h4>
              <p>914</p>
            </div>

            <div className="tickets">
              <h4>Pending</h4>
              <p>281</p>
            </div>
          </div>
        </div>

        <div className="tasks">
          <div className="unresolvedTickets">
            <div className="ticketsHeader">
              <div className="unsupported">
                <h3>Tasks</h3>
                <p>
                  <span>Today </span>
                </p>
              </div>
              <p>View all</p>
            </div>
            <div className="ticketsBody">
              <div className="task_status">
                <h4 className="createTask">Create a new task</h4>
                <button>
                  <PlusIcon />
                </button>
              </div>

              <div class="task_status">
                <div class="radio_check">
                  <label for="task-checkbox" class="checkbox-label">
                    <input
                      type="checkbox"
                      id="task-checkbox"
                      class="checkbox-input"
                    />
                    <span class="checkbox-icon"></span>
                  </label>
                  <h4>Finish ticket update</h4>
                </div>
                <p class="urgent">URGENT</p>
              </div>

              <div className="task_status">
                <div class="radio_check">
                  <label for="task-checkbox-2" class="checkbox-label">
                    <input
                      type="checkbox"
                      id="task-checkbox-2"
                      class="checkbox-input"
                    />
                    <span class="checkbox-icon"></span>
                  </label>
                  <h4>Create new ticket example</h4>
                </div>
                <p className="new">NEW</p>
              </div>

              <div className="task_status">
                <div class="radio_check">
                  <label for="task-checkbox-3" class="checkbox-label">
                    <input
                      type="checkbox"
                      id="task-checkbox-3"
                      class="checkbox-input"
                    />
                    <span class="checkbox-icon"></span>
                  </label>
                  <h4>Update ticket report</h4>
                </div>
                <p className="default">DEFAULT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
