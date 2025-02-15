import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import axios from "axios";
import { toast } from "react-hot-toast";

export const useTaskStore = create((set) => ({
  tasks: [],
  isFetchingTasks: false,
  fetchTasks: async () => {
    set({ isFetchingTasks: true });
    try {
      const res = await axiosInstance.get("/tasks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      set({ tasks: res.data });
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch tasks");
    } finally {
      set({ isFetchingTasks: false });
    }
  },
  completeTask: async (taskId) => {
    if (!taskId) {
      toast.error("Task ID is required");
      return;
    }
    try {
      await axiosInstance.post(`/tasks/${taskId}/complete`, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      set((state) => ({
        tasks: state.tasks.filter((task) => task._id !== taskId),
      }));

      toast.success("Task completed successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to complete task");
    }
  },
}));
